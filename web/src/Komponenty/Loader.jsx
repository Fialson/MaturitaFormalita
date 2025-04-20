import { Html, useProgress } from "@react-three/drei";
import "../css/Loader.css"

function Loader() {
    const { progress } = useProgress();
    return (
      <Html 
      center 
      className="loader"
      >
        <div>Načítání... {progress.toFixed(0)}%</div>
      </Html>
    );
}
export default Loader;