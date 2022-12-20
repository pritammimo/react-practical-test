import React from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

const PassengarModal = ({show,onHide,data}) => {
  return (
    <div>
        <Modal 
        isOpen={show} 
        onClick={onHide}
        >
          <ModalHeader 
          >Airlines information</ModalHeader>
          <ModalBody>
          <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Country</th>
                    <th scope="col">Established</th>
                    <th scope="col">Website</th>
                  </tr>
                </thead>
                <tbody>
                    {data?.map((item,i)=>(
                       <tr key={i}>
                       <td>{item.name}</td>
                       <td>{item.country}</td>
                       <td>{item.established}</td>
                       <td>{item.website}</td>
                   </tr>
                    ))}
                  
                </tbody>
              </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" 
            onClick={onHide}
            >Cancel</Button>
          </ModalFooter>
        </Modal>
    </div>
  )
}

export default PassengarModal