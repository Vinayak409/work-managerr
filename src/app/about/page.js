async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function About() {
  await takeTime();
  throw new Error("this is manual error");
  return (
    <div>
      <h1>This is about route</h1>
    </div>
  );
}
