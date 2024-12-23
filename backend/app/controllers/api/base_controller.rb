# frozen_string_literal: true

class Api::V1::BaseController < ApplicationController
  alias current_user current_api_user
  alias authenticate_user! authenticate_api_user!
  alias user_signed_in? api_user_signed_in?
end
