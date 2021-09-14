# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

airlines = Airline.create([
    {
        name: "Philippine Airlines",
        image_url: "1"
    },
    {
        name: "Philippine Airlines2",
        image_url: "2"
    },
    {
        name: "Philippine Airlines3",
        image_url: "3"
    },
    {
        name: "Philippine Airlines4",
        image_url: "4"
    },
    {
        name: "Philippine Airlines5",
        image_url: "5"
    },
    {
        name: "Philippine Airlines6",
        image_url: "6"
    }
])

reviews = Review.create([
    {
        title: "test1",
        description: "test222",
        score: 5,
        airline: airlines.first
    },
    {
        title: "test1",
        description: "test222",
        score: 2,
        airline: airlines.first
    },
    {
        title: "test2",
        description: "test222",
        score: 4,
        airline: airlines.first
    },
    {
        title: "test3",
        description: "test222",
        score: 2,
        airline: airlines.first
    },
    {
        title: "test4",
        description: "test222",
        score: 5,
        airline: airlines.first
    }
])