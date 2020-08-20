# == Schema Information
#
# Table name: pheeds
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_pheeds_on_user_id_and_name  (user_id,name) UNIQUE
#
class Pheed < ApplicationRecord
  has_many :feeds,
    foreign_key: :feed_id,
    class_name: :Feed

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
