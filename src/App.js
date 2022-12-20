import { React,useState,useEffect } from 'react';
import './App.css';
import {
  Card,  CardHeader, Container,
  Pagination,
  PaginationItem,
  PaginationLink, Row, Table,
} from "reactstrap";
import { PassengerList} from './services/Passengerlist';
import PassengarModal from './Components/PassengarModal';
function App() {
  const [page, setpage] = useState(0);
  const [totalpage,settotalpage]=useState("")
  const [modal,setmodal]=useState(false)
  const [modaldata,setmodaldata]=useState("")
  const [Passengardata, setPassengardata] = useState([]);
  const [message,setMessage]=useState("")
  useEffect(() => {
   getUserList()
   setMessage("Please Wait ......")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const getUserList = () => {
    PassengerList(page,20).then((res)=>{
      settotalpage(res.totalPages)
      setMessage("")
      setPassengardata(res.data)
    }).catch((err)=>{
      setMessage("No Passengers Found")
    })
  };
  const handleModal=(data)=>{
   setmodaldata(data?.airline)
   setmodal(true)
  }
  const handleclosemodal=()=>{
    setmodal(false)
  }
  const handlePreviousPage=()=>{
   setpage((prev)=>prev-1)
  }
  const handleNextPage=()=>{
    setpage((prev)=>prev+1)
  }
  return (
    <div className="App">
      <Container className="mt-7" fluid>
        <Row>
        <div className="col">
        <Card >
        <CardHeader className="border-0">
                <div className="row">
                  <div className="col-md-8 d-flex">
                    <div className="col-md-3">
                      <h3 className="mb-0 fo-fix">Passengar List</h3>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "right" }}
                    className="col-md-4 align-right"
                  >
                    <div
                      className="mb-0 form-group inline pagination-style"
                    
                    >
                      <div className="input-group-alternative input-group">
                      <Pagination aria-label="Page navigation example">
                        {page !==0 &&  
                        <PaginationItem>
                      <PaginationLink  previous onClick={handlePreviousPage} />
                      </PaginationItem>}
                     
                      <PaginationItem>
                       <PaginationLink >
                        {page+1}
                    </PaginationLink>
                    </PaginationItem>
                    {page!= totalpage &&  <PaginationItem>
                    <PaginationLink next  onClick={handleNextPage} />
                     </PaginationItem>}
                   
                        </Pagination>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
               
        <Table className="align-items-center" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">User name</th>
                    <th scope="col">Total number of trips</th>
                    <th scope="col" />
                  </tr>
                </thead>
                   <tbody>
                  {message !==""?<div>{message}</div> :Passengardata?.map((item,i)=>(
                  <tr key={i}>
                  <td>{item?.name}</td>
                  <td>{item?.trips}</td>
                  <td>
                  <span 
                  className="hovertext w-10 span-hover" data-hover="Check airline"
                  onClick={()=>handleModal(item)}>
                          <i className="fas fa-plane " ></i>
                        </span>
                      </td>
                </tr>
                 )) 
                }
                 
                  
                </tbody>
             
              </Table>
        </Card>
       
        </div>
        
        </Row>
      
      </Container>
        {modal && <PassengarModal 
        show={modal}
        onHide={()=>handleclosemodal()}
        data={modaldata}
        />}
    </div>
  );
}

export default App;
