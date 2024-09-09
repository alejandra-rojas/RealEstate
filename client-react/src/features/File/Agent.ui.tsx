interface Agent {
  name: string;
  email: string;
  photo: string;
}

function Agent({ agent }: { agent: Agent }) {
  return (
    <div>
      <p>Agent details</p>
      <img src={agent.photo} alt={agent.name} className="square h-10" />
      <p>{agent.name}</p>
      <p>{agent.email}</p>
    </div>
  );
}

export default Agent;
