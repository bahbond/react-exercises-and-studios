
import React from "react";
import classes from './ChoresList.module.css';

// export default function ChoresList () {
//    return <p class="choresText">No content is here! What BOUT</p>;
// }
class choresList extends React.Component {
   render() {
      const chores = ["Take out the trash", "Do prepwork", "Laundry"];
      return (
      <div>
         <h3 className = {classes.choresHeading}>Today's Chores</h3>
         <ol>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>

         </ol>
      </div>
      );
   }
}

export default choresList