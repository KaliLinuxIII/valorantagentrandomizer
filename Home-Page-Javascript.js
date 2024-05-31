const randomAgentButton = document.getElementById('randomAgentButton');
const randomAgentDisplayBox = document.querySelector('.randomAgentDisplayBox');
const agentImg = document.getElementById('agentImg');
const agentImages = {
  astra: 'Agent-Images/Astra img.png',
  breach: 'Agent-Images/Breach img.png',
  brimstone: 'Agent-Images/Brimstone img.png',
  chamber: 'Agent-Images/Chamber img.png',
  clove: 'Agent-Images/Clove img.png',
  cypher: 'Agent-Images/Cypher img.png',
  deadlock: 'Agent-Images/Deadlock img.png',
  fade: 'Agent-Images/Fade img.png',
  gekko: 'Agent-Images/Gekko img.png',
  harbor: 'Agent-Images/Harbor img.png',
  iso: 'Agent-Images/Iso img.png',
  jett: 'Agent-Images/Jett img.png',
  kayo: 'Agent-Images/KAYO img.png',
  killjoy: 'Agent-Images/Killjoy img.png',
  neon: 'Agent-Images/Neon img.png',
  omen: 'Agent-Images/Omen img.png',
  phoenix: 'Agent-Images/Phoenix img.png',
  raze: 'Agent-Images/Raze img.png',
  reyna: 'Agent-Images/Reyna img.png',
  sage: 'Agent-Images/Sage img.png',
  skye: 'Agent-Images/Skye img.png',
  sova: 'Agent-Images/Sova img.png',
  viper: 'Agent-Images/Viper img.png',
  yoru: 'Agent-Images/Yoru img.png'
};

const agents = [
  'Astra',
  'Breach',
  'Brimstone',
  'Chamber',
  'Clove',
  'Cypher',
  'Deadlock',
  'Fade',
  'Gekko',
  'Harbor',
  'Iso',
  'Jett',
  'KAY/O',
  'Killjoy',
  'Neon',
  'Omen',
  'Phoenix',
  'Raze',
  'Reyna',
  'Sage',
  'Skye',
  'Sova',
  'Viper',
  'Yoru'
];

randomAgentButton.addEventListener('click', agentSelector);

function agentSelector() {
//Decides our random agent
  const randomAgent = Math.random();
  console.log(randomAgent);
  randomAgentIndex = Math.floor(randomAgent * agents.length);
  agentDisplay(agents[randomAgentIndex]);
};

//Create our display ids

function agentDisplay(agentName) {
//Create our paragraph that displays the agent name
  const randomAgentDisplay = document.querySelector('.agent-display');
  randomAgentDisplay.textContent = 'Your random agent is ' + agentName;
  let formattedAgentName = agentName.toLowerCase();
  if (agentName === 'KAY/O') {
    formattedAgentName = 'kayo';
  };

  agentImg.src = agentImages[formattedAgentName];
};