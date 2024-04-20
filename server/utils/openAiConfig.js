const { Configuration, OpenAIApi } = require("openai");

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const OPENAIA_API_KEY = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: OPENAIA_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.default = openai;
