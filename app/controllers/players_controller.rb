class PlayersController < ApplicationController
  before_action :set_player, only: :add_to_team

  # GET /players
  def index
    @players = Player.all

    render json: @players
  end

  # GET /players/1
  def add_to_team 
    @player = Team.find(params[:team_id])
    @player.teams << @team  

    render json: @team, include: :players
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end
  end
