import React, {useEffect, useState} from 'react';
import CustomerForm from './components/customerForm'; 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const mockCustomers = [
  {
    id: 1,
    firstName: 'Naimish',
    lastName: 'Bhagat',
    dob: '04/12/1983'
  },
  {
    id: 2,
    firstName: 'Bonika',
    lastName: 'Bhagat',
    dob: '11/09/1990'
  },
  {
    id: 3,
    firstName: 'Mitchell',
    lastName: 'Bhagat',
    dob: '06/06/2014'
  },
];
function App(){
  const [customer, setCustomer] = useState({id:'',firstName: '', lastName: '', dob: ''});
  const [searchQuery, setSearchQuery] = useState('');
  const [customers, setCustomers] = useState(mockCustomers);
  
  const resetForm = () =>{
    setCustomer({id:'',firstName: '', lastName: '', dob: ''});
  };
  
  useEffect(()=>{
    // const originalCustomers = [...customers];
    // const newCustomers = [...originalCustomers];
    // if(searchQuery !== '') {
    //   const searchCustomers = newCustomers.filter((customer)=>{
    //     return (customer.firstName.includes(searchQuery) || customer.lastName.includes(searchQuery));
    //   });
    //   setCustomers(searchCustomers);
    // }else{
    //   setCustomers(originalCustomers); 
    // }
  },[searchQuery]);

  const addCustomer = customer =>{
    if(customer.id){
      const newCustomers = [...customers];
      const index = newCustomers.findIndex(p=>p.id === customer.id);
      newCustomers[index] = customer;
      setCustomers(newCustomers);
    }else{
      const id = Math.max.apply(Math, customers.map(function(o) { return o.id; }))+1;
      customer.id = id;
      const newCustomers= [...customers, customer];
      setCustomers(newCustomers);
    }
    resetForm();
  };

  const deleteCustomer = id =>{
    const newCustomers= [...customers];
    const index = newCustomers.findIndex(p=>p.id === id);
    newCustomers.splice(index,1);
    setCustomers(newCustomers);
  };

  const setDefaultCustomer = (customer) => {
    const newCustomer= {...customer};
    setCustomer(newCustomer);
    //console.log(customer);
  };

  const handleSearch = e => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const results = !searchQuery ? customers : customers.filter(customer =>
    customer.firstName.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
    customer.lastName.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input type="text" placeholder="search..." value={searchQuery} onChange={handleSearch} />
          <table className="table table-stripe">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Dob</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {results.map((customer)=>(
                  <tr key={customer.id}>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.dob}</td>
                    <td>
                      <button className="btn btn-primary mr-2" onClick={()=>setDefaultCustomer(customer)}>Update</button>
                      <button className="btn btn-danger" onClick={()=>deleteCustomer(customer.id)}>Delete</button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Add customer</h1>
          <CustomerForm addCustomer={addCustomer} customer={customer}/>
        </div>
      </div>
    </div> 
  );
}
export default App;