create table tasks(
    id int auto_increment primary key,
    title varchar(50) not null default 'testTitle',
    description text not null default 'default description text',
    dueDate date not null default '2025-01-01',
    userId int,
    foreign key(userId) references users(id)
    on delete cascade
    on update cascade
);