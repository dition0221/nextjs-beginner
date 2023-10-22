import NavBar from "@/components/NavBar";

export default function index() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <style jsx>{`
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}
