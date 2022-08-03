import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

let history = useNavigate()
function setID(id,name,age){
	localStorage.setItem('id', id);
	localStorage.setItem('Name', name);
	localStorage.setItem('Age', age);
}

function deleted(id){
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);
 console.log(index)
	array.splice(index,1)
	history('/')
}

return (
	<div style={{margin:'10rem'}}>
		<Table >
<thead>
	<tr>
	<th>Name</th>
	<th>Age</th>
	</tr>
</thead>
<tbody>
	{array.map((item) => {
return(
<tr>
	<td>{item.Name}</td>
	<td>{item.Age}</td>
	<td><Link to={`/edit`}><Button onClick={(e) =>
	setID(item.id,item.Name,item.Age)} variant="info">
		Edit</Button></Link></td>

	<td><Button onClick={e => deleted(item.id)}
	variant="danger">Delete</Button></td>
	</tr>
)})}
</tbody>
</Table>

<Link to='/create'>
<Button variant="warning" size="lg">Create</Button>
</Link>
	</div>
)
}

export default Home
