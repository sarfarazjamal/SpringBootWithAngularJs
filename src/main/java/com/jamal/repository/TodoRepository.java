package com.jamal.repository;

import org.springframework.data.repository.CrudRepository;

import com.jamal.entity.Todo;
/**
 * @author Sarfarazjamal
 */
public interface TodoRepository extends CrudRepository<Todo, Long> {
	Todo findOneByDescription(String description);
}
