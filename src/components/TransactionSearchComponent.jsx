import React from 'react'

function TransactionSearchComponent({searchTerm, setSearchTerm}) {

  /* Search Query */
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card shadow my-1">
          <div className="card-body p-1">
            <form action="" method="get">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control input-xs border-0" 
                  name="search" 
                  placeholder="Search for line"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text border-0 bg-white">.00</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionSearchComponent
