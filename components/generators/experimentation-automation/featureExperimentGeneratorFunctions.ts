import type { UpdateContextFunction } from "@/utils/typescriptTypesInterfaceIndustry";
import { wait } from "@/utils/utils";

const waitTime = .0005;

const probablityExperimentTypeSearchEngine = {
	["bayesian"]: { ["trueProbablity"]: 30, ["falseProbablity"]: 60 },
	["frequentist"]: { ["trueProbablity"]: 52, ["falseProbablity"]: 60 },
};

export const generateSuggestedItemsFeatureExperimentResults = async ({
	client,
	updateContext,
	setProgress,
	setExpGenerator,
	experimentTypeObj,
}: {
	client: any;
	updateContext: UpdateContextFunction;
	setProgress: React.Dispatch<React.SetStateAction<number>>;
	setExpGenerator: React.Dispatch<React.SetStateAction<boolean>>;
	experimentTypeObj: { experimentType: string; numOfRuns: number };
}): Promise<void> => {
	setProgress(0);

	for (let i = 0; i < experimentTypeObj.numOfRuns; i++) {
		let totalPrice = 0;
		let totalItems = 0;
		const cartSuggestedItems: boolean = client?.variation("cartSuggestedItems", false);
		if (cartSuggestedItems) { //winner
			totalPrice = Math.floor(Math.random() * (500 - 300 + 1)) + 700;
			totalItems = Math.floor(Math.random() * (7 - 3 + 1)) + 4;
			await client?.track("in-cart-total-items", client.getContext(), totalItems);
			await client?.flush();
			await client?.track("in-cart-total-price", client.getContext(), totalPrice);
			await client?.flush();
		} else {
			totalPrice = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
			totalItems = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
			await client?.track("in-cart-total-items", client.getContext(), totalItems);
			await client?.flush();
			await client?.track("in-cart-total-price", client.getContext(), totalPrice);
			await client?.flush();
		}
		await client?.flush();
		setProgress((prevProgress: number) => prevProgress + (1 / experimentTypeObj.numOfRuns) * 100);
		await wait(waitTime)
		await updateContext();
	}
	setExpGenerator(false);
};

export const generateNewSearchEngineFeatureExperimentResults = async ({
	client,
	updateContext,
	setProgress,
	setExpGenerator,
	experimentTypeObj,
}: {
	client: any;
	updateContext: UpdateContextFunction;
	setProgress: React.Dispatch<React.SetStateAction<number>>;
	setExpGenerator: React.Dispatch<React.SetStateAction<boolean>>;
	experimentTypeObj: { experimentType: string; numOfRuns: number };
}): Promise<void> => {
	setProgress(0);
	let totalPrice = 0;

	const experimentType: string = experimentTypeObj.experimentType;

	for (let i = 0; i < experimentTypeObj.numOfRuns; i++) {
		const newSearchEngineFeatureFlag: string = client?.variation(
			"release-new-search-engine",
			false,
		);
		if (newSearchEngineFeatureFlag) {
			totalPrice = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
			let probablity = Math.random() * 100;
			if (probablity < probablityExperimentTypeSearchEngine[experimentType as keyof typeof probablityExperimentTypeSearchEngine][
				"trueProbablity"
			]) {
				await client?.track("search-engine-add-to-cart");
					await client?.flush();
			}
			await client?.track("in-cart-total-price", undefined, totalPrice);
				await client?.flush();
		} else { //winner is old search engine
			totalPrice = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
			let probablity = Math.random() * 100;
			if (probablity < probablityExperimentTypeSearchEngine[experimentType as keyof typeof probablityExperimentTypeSearchEngine][
				"falseProbablity"
			]) {
				await client?.track("search-engine-add-to-cart");
					await client?.flush();
			}
			await client?.track("in-cart-total-price", undefined, totalPrice);
				await client?.flush();
		}
		setProgress((prevProgress: number) => prevProgress + (1 / experimentTypeObj.numOfRuns) * 100);
		await client?.flush();
		await wait(waitTime)
		await updateContext();
	}
	setExpGenerator(false);
};
