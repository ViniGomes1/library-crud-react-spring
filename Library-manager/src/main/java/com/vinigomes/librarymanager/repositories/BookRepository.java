package com.vinigomes.librarymanager.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vinigomes.librarymanager.model.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {
	
	int countByCodigo(int codigo);
	
	Book findByCodigo(int codigo);
}
