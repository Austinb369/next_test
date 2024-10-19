import Apis from "./components/apis";
import Login from "./components/login";
import './globals.css';

export default function Home() {
  return (
    <div>
      <Login />
      <Apis />
    </div>
  );
}

