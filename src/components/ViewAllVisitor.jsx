import React from 'react'

const ViewAllVisitor = () => {
  return (
    <div>

        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
    <th scope="col">SI.NO</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Purpose</th>
      <th scope="col">Whom to meet</th>
      <th scope="col">Date & Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
      <th scope="row">Jo</th>
      <td>Mark</td>
      <td>Fees</td>
      <td>Administrator</td>
      <td>07-08-2024 T:09-45-34</td>

    </tr>
    <tr>
        <td>2</td>
      <th scope="row">Mary</th>
      <td>Jacob</td>
      <td>Admission</td>
      <td>Principal</td>
      <td>12-06-2024 T:03-05-34</td>
    </tr>
   
  </tbody>
</table>
            </div>
        </div>
    </div>
  )
}

export default ViewAllVisitor