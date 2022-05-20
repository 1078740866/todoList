package com.example.todo.model;

import java.sql.Date;

import lombok.Data;

@Data
public class TodoModel {
	Integer id;
	String name;
	Integer status;
	Date date;
}
