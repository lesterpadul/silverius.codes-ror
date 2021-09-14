class Airline < ApplicationRecord
    has_many :reviews

    # call this before creation is done -> this will automatically trigger the sluggify
    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end
    
    def avg_score
        score = reviews.average(:score)
        if score 
            return score.round(2).to_f
        else
            return 0
        end
    end
end
