# == Schema Information
#
# Table name: feeds
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  pheed_id   :integer
#  source_id  :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_feeds_on_user_id_and_source_id  (user_id,source_id) UNIQUE
#
class Feed < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :source,
    foreign_key: :source_id,
    class_name: :Source

  belongs_to :pheed,
    foreign_key: :pheed_id,
    class_name: :Pheed

  # def self.search(search) 
  #   if search 
  #     source = Source.find_by(name: search)
  #     if source

  #     else

  #     end
  #   else

  #   end
  # end
end
