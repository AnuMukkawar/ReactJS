
import './App.css';
import Pricing from "./pricingTable.js";

function App() {
  let arr = [
    {
      type: "FREE",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      projects1: "Unlimited Public Projects",
      access: "Community Access",
      projects2: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      report: "Monthly Status Report"
    },
    {
      type: "PLUS",
      price: "$9",
      user: "5 Users",
      storage: "50GB Storage",
      projects1: "Unlimited Public Projects",
      access: "Community Access",
      projects2: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      report: "Monthly Status Report"
    },
    {
      type: "PRO",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      projects1: "Unlimited Public Projects",
      access: "Community Access",
      projects2: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Unlimited Free Subdomain",
      report: "Monthly Status Report"
    }
  ];
  return (
    <div className="App">
      <div className="pricing py-5">
        <div className="container">
         <div className="row">
            {arr.map((value) => {
              return (
                <Pricing
                  type={value.type}
                  price={value.price}
                  user={value.user}
                  storage={value.storage}
                  projects1={value.projects1}
                  access={value.access}
                  projects2={value.projects2}
                  support={value.support}
                  subdomain={value.subdomain}
                  report={value.report}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
