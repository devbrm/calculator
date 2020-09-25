const handleSessionStorage = (obj) => {
  if (!!!sessionStorage.getItem("calcHistory"))
    sessionStorage.setItem("calcHistory", "[]");

  const history = JSON.parse(sessionStorage.getItem("calcHistory"));
  const previousObj = history[history.length - 1] || "";
  const [e, r] = ["expression", "result"];

  if (obj[e] === previousObj[e] && obj[r] === previousObj[r]) return;

  history.push(obj);
  sessionStorage.setItem("calcHistory", JSON.stringify(history));
};

export default handleSessionStorage;
