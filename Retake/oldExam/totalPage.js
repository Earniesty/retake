function totalPages(arrayItems, rowsPerPage) {
    //   - กรณี arrayItems เป็น null หรือ undefined ให้ return undefined
    // - กรณี rowsPerPage เป็น null หรือ undefined หรือเป็น 0 จะ return 1
      if(arrayItems?.length === 0 || arrayItems === null || arrayItems === undefined) return undefined;
      if(rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0) return 1;
    
    
      let result = Math.ceil(arrayItems?.length / rowsPerPage);
      return result;
    }