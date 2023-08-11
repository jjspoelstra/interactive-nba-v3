import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext } from "react";
import { useAuthContext } from "@/firebase/AuthContext"
import { AppContext }  from '@/app/components/statsContext'

export default function Insights() {

  return (
    
    <section className="insight">
      <section className="insightContainer">

        <section className="insightStats">

          <span className="verification">✓</span>
          <span className="upvotes">25</span>
          <section>
            <span className="agree">↑</span>
            <span className="disagree">↓</span>
            
          </section>

        </section>
      
        <section className="insightContent">
          <section className="title">
            <h3> Underrated All-Time Team </h3>
            \\\\\\\\\\\\\\\\\\\\
            <h6> jjspoelstra </h6>
            ///////
            <h6> 5/5/23 </h6>
          </section>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolore. ok? okokok ok ok  ok dsdasdfdafasfasfasfffa a         asdasd asd sad asd asd asd asdasda sd</p>
          
        </section>

        <section className="repliesBox">
          <span>replies</span>
          <span>replies</span>
        </section>

      </section>
    </section>
  
    
  );
}
