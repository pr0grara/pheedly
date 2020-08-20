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
require 'test_helper'

class PheedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
