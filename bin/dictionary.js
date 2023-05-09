const Map1 = new Map([ 
  ["<p>", "p{\n  "],
  ["<h1>", "h1{\n  "],
  ["<h2>", "h2{\n  "],
  ["<h3>", "h3{\n  "],
  ["<h4>", "h4{\n  "],
  ["<h5>", "h5{\n  "],
  ["<h6>", "h6{\n  "],
  ["<div>", "div{\n  "],
  ["<div style=","div: "],
  ["<span style=","span style="],
  ["<span>","span{\n  "],
  ["<p style=","p: "],
  ["<h1 style=","h1:"],
  ["<h2 style=","h2:"],
  ["<h3 style=","h3:"],
  ["<h4 style=","h4:"],
  ["<h5 style=","h5:"],
  ["<h6 style=","h6: "],
  ["<pre style=","pre: "],
  ["</pre>","\n}"],
  ["<em>","em{\n"],
  ["<strong>","strong{\n  "],
  ["<s>","s{\n"],
  ["<sup>","sup{\n  "],
  ["<sub>","sub{\n  "],
  ["<blockquote>","blockqoute{\n  "],
  ["<code>","code{\n  "],
  ["</strong>","\n}"],
  ["</span>","\n}"],
  ["</p>","\n}"],
  ["</em>","\n}"],
  ["</h1>","\n}"],
  ["</h2>","\n}"],
  ["</h3>","\n}"],
  ["</div>","\n}"],
  ["</h4>","\n}"],
  ["</h5>","\n}"],
  ["</h6>","\n"],
  ["</code>","\n}"],  
  ["</blockquote>","\n}"],
  ["</sub>","\n}"],
  ["</sup>","\n}"],
  ["</s>","\n}"],
  ["text-decoration:","text-decoration:"],
  ["underline;","underline;"],
  ["pt;","pt"],
  ["px;","px"],
  ["font-size:","font-size:"],
  [";",""],
  ["font-family:","font-family:"],
  ["justify;","justify"],
  ["color:","color:"],
  ["rgb(","rgb("],
  [");",");"],
  ["padding-","padding-"],
  ["center;","center;"],
  ["left;","left;"],
  ["right;","right;"],
  ["background-","background-"],
  ["line-height","line-height"],
  [">","\n{"],
]);


function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceWords(content,Map1) {
  const keysArray = [...Map1.keys()];
  const valuesArray = [...Map1.values()];
  let resultString = content;
  for (let i = 0; i < keysArray.length; i++) {
    const escapedKey = escapeRegExp(keysArray[i]);
    const regex = new RegExp(escapedKey, 'gi');
    resultString = resultString.replace(regex, valuesArray[i]);
  }
  console.log(resultString);
  return resultString;
  
}