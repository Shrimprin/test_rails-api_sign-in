# frozen_string_literal: true

class Api::HealthCheckController < ApplicationController
  def index
    render json: { message: 'OK' }, status: :ok
  end
end
