package com.jamal.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
/**
 * @author Sarfarazjamal
 */
@Configuration
@EnableSpringDataWebSupport
@EnableJpaAuditing
public class AppConfig {

}
