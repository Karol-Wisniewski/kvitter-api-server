import dotenv from 'dotenv';
dotenv.config();

const config = {
	apiServer: {
		port: process.env.API_SERVER_PORT || 3000,
	},
};

export default config;
