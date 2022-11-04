export type DataProp = {
	id: number;
	title: string;
	description: string;
	url: string;
};

export const data: DataProp[] = [
	{
		id: 1,
		title: 'SapientNitro',
		description: 'I used to work at SapientNitro.',
		url: 'https://placeimg.com/150/150/nature/sepia',
	},
	{
		id: 2,
		title: 'Razorfish',
		description: 'SapientNitro merged with Razorfish.',
		url: 'https://placeimg.com/150/150/animals/sepia',
	},
	{
		id: 3,
		title: 'SapientRazorfish',
		description: 'Now I work at SapientRazorfish.',
		url: 'https://placeimg.com/150/150/tech/sepia',
	},
];
