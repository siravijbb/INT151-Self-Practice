function calculateTotalPages(items,itemsPerPage) {
    if (itemsPerPage < 0 ) {throw new RangeError( "itemsPerPage must be greater than zero");}
    let page = 0
    page = items / itemsPerPage
    page = Math.ceil(items )
    return page
    
}