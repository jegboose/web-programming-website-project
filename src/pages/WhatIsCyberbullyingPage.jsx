// What is Cyberbullying? — Hayden
// Defines cyberbullying, explains types (harassment, impersonation, doxxing, etc.), and gives real-world examples

import Definition from "../components/whatiscyberbullying/Definition";
import TypeCards from "../components/whatiscyberbullying/TypeCards";

export default function WhatIsCyberbullyingPage() {
  return (
    <main>
      <h1>What is Cyberbullying?</h1>
      <Definition />

      <TypeCards 
        type="Harassment" 
        description="Sending repeated, unwanted messages to someone online." />
      <TypeCards 
        type="Impersonation" 
        description="Pretending to be someone else online to cause harm or spread misinformation." />
      <TypeCards 
        type="Doxxing" 
        description="Publishing private or identifying information about someone without their consent." />
    </main>
  )
}
