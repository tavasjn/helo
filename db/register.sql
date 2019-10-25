insert into helo_users(
    helo_user_username,
    helo_user_password
) values (
    ${username},
    ${password}
)
returning *;