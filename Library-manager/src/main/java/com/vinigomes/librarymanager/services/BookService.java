package com.vinigomes.librarymanager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vinigomes.librarymanager.model.Book;
import com.vinigomes.librarymanager.model.Message;
import com.vinigomes.librarymanager.repositories.BookRepository;

@Service
public class BookService {

	@Autowired
	private Message msg;

	@Autowired
	private BookRepository book;

	// selecionar todos
	public ResponseEntity<?> SelecionarTodos() {
		return new ResponseEntity<>(book.findAll(), HttpStatus.OK);
	}

	// selecionar por codigo
	public ResponseEntity<?> SelecionarPorCodigo(int codigo) {
		if (book.countByCodigo(codigo) == 0) {
			msg.setMessage("Não foi encontrado nenhuma pessoa");
			return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<>(book.findByCodigo(codigo), HttpStatus.OK);
		}
	}

	// cadastrar livros
	public ResponseEntity<?> Cadastrar(Book obj) {
		if (obj.getNomeLivro().equals("") || obj.getNomeAutor().equals("") || obj.getNomeEditora().equals("")) {
			msg.setMessage("Insira um dado válido");
			return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<>(book.save(obj), HttpStatus.OK);
		}
	}

	// editar livros
	public ResponseEntity<?> Editar(Book obj) {
		if (book.countByCodigo(obj.getCodigo()) == 0 || obj.getNomeLivro().equals("") || obj.getNomeAutor().equals("") || obj.getNomeEditora().equals("")){
			msg.setMessage("Insira um dado válido");
			return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<>(book.save(obj), HttpStatus.OK);
		}
	}
	
	
	//remover livros
	public ResponseEntity<?> Remover(int codigo){
		if (book.countByCodigo(codigo) == 0) {
			msg.setMessage("Insira um código válido");
			return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
		}else {
			Book obj = book.findByCodigo(codigo);
			book.delete(obj);
			
			msg.setMessage("Livro deletado com sucesso");
			return new ResponseEntity<>(msg, HttpStatus.OK);
		}
	}
}
