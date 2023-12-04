import Joke from "../joke";

interface ChuckJokeProps {
  joke: Joke;
}

const ChuckJoke: React.FC<ChuckJokeProps> = (props) => <p>{props.joke.joke}</p>;

export default ChuckJoke;
