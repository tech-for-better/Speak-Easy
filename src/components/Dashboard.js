export function Dashboard() {
  async function handleSignOut() {
    // @TODO: add sign out logic
  }

  return (
    <div>
      <p>Welcome!</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
