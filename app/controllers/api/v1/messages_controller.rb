module Api
  module V1
    # Handles API requests for messages
    class MessagesController < ApplicationController
      def index
        @messages = Message.all
        render json: @messages, status: :ok
      end

      # Add this method to set the CORS headers
      def set_cors_headers
        response.set_header('Access-Control-Allow-Origin', '*')
        response.set_header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
        response.set_header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, Token')
      end

      def random
        @random_message = Message.all.sample
        render json: @random_message, status: :ok
      end

      before_action :set_cors_headers
    end
  end
end
