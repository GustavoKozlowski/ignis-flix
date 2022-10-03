
import { useRouter } from "next/router";

export default function SplathScreen() {
  const router = useRouter();
  const goLogin = () => {
    router.push("/login");
  };
  return (
    <div>
      <button type="button" onClick={goLogin}>
        Click me
      </button>
    </div>
  );
}
