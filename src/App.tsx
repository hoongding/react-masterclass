import React, { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent) => {};
  return (
    <div>
      <form>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
