User.delete_all
Video.delete_all

User.create([
    { name: 'John Doe', email: 'john@example.com', password: '123456' },
    { name: 'Jane Smith', email: 'jane@example.com', password: '123456' },
])

# Video.create([
#     { link: 'https://www.youtube.com/watch?v=wMCtDXrJA2k&ab_channel=VTVGi%E1%BA%A3iTr%C3%ADOfficial', description: 'Description 1', like_number: 10, dislike_number: 2, user_id: 1 },
#     { link: 'https://www.youtube.com/watch?v=wMCtDXrJA2k&ab_channel=VTVGi%E1%BA%A3iTr%C3%ADOfficial', description: 'Description 2', like_number: 5, dislike_number: 1, user_id: 2 },
#     { link: 'https://www.youtube.com/watch?v=wMCtDXrJA2k&ab_channel=VTVGi%E1%BA%A3iTr%C3%ADOfficial', description: 'Description 3', like_number: 15, dislike_number: 3, user_id: 1 },
# ])