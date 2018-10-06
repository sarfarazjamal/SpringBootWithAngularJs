package com.jamal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.jamal.entity.Todo;
import com.jamal.repository.TodoRepository;
/**
 * @author Sarfarazjamal
 */
@Component
public class CustomCommandLineRunner implements CommandLineRunner {

	private final Logger logger = LoggerFactory.getLogger(CustomCommandLineRunner.class);

	@Autowired
	private TodoRepository todoRepository;

	@Override
	public void run(final String... arg0) throws Exception {
		this.logger.info("COMMAND LINE RUNNER");
		this.logger.info(this.todoRepository.save(new Todo("Agile Stand Up")).toString());
		this.logger.info(this.todoRepository.save(new Todo("Meeting with UI Team")).toString());
		this.logger.info(this.todoRepository.save(new Todo("Production Build")).toString());
	}

}
