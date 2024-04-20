// const Errorhandler = require("../utils/errorHandler");
const openai = require("../utils/openAiConfig");

exports.getOpenAiModels = async (req, res, next) => {
  const response = await openai.default.listModels();
  res.status(200).json(response.data);
};


exports.createCompletion = async (req, res, next) => {

    const { model, max_tokens, temperature, prompt, top_p, frequency_penalty, presence_penalty } = req.body;
    console.log({model, max_tokens, temperature, prompt, top_p, frequency_penalty, presence_penalty});

    const response = await openai.default.createCompletion({
        model,
        prompt,
        max_tokens,
        temperature,
        top_p,
        frequency_penalty,
        presence_penalty
    });
    console.log(response.data);
    const regex = /\n\d+\./g;

    const choices = response.data.choices[0];
    const choiceText = choices.text;
    const interpretedText = choiceText.split(regex).map(substring => substring.trim());

    res.status(200).json(interpretedText);
};

exports.createImage = async (req, res, next) => {

  const { prompt, n, size } = req.body;
  console.log({ prompt, n, size });
  const response = await openai.default.createImage({
    prompt,
    n,
    size
  })

  console.log(response.data);

  res.status(200).json(response.data);

}
