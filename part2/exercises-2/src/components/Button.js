import './styles.css';

function Button() {
      function onLearnMore(){
         alert("Surf's Up!");
      }
   return ( 
         <button onClick ={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;