select h.helo_user_id, h.helo_user_username, h.helo_user_password, p.helo_posts_title, p.helo_posts_url, p.helo_posts_description from helo_users h 
join helo_posts p on h.helo_user_id = p.helo_user_id
where h.helo_user_username = $1;