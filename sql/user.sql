create table users(
    id int auto_increment primary key,
    username varchar(50) not null default 'testUser',
    email varchar(50) not null default 'testEmail',
    role varchar(50) not null default 'testRole'
);