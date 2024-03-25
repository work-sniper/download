document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});

// 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

function sendToChatGPT() {
  let value = document.getElementById("word-input").value;

  let body = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: value }],
    tempreture: "1",
  };

  let headers = {
    Authorization: "Bearer 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",
  };

  axios
    .post("https://api.openai.com/v1/chat/completions", body, {
      headers: headers,
    })
    .then((response) => {
      let reply = response.data.choices[0].message.content;
      document.getElementById("reply-content").textContent = reply;
    });
}