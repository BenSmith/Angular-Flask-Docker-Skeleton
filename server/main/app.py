# -*- coding: utf-8 -*-
"""Angular-Flask-Docker-Skeleton

    Simple Flask app

"""
from flask import Flask, jsonify
from poker import Deck, Hand

app = Flask(__name__)

app.debug = True


@app.route("/api")
def hello():
    return "Hello World from Flask using Python 3.6.2!!"


@app.route('/api/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'ponggg!'
    })


@app.route('/api/play')
def deal_and_evaluate():
    d = Deck()
    d.shuffle()
    hands = d.deal_hands(2)
    winning_hand = -1
    hand_text = [repr(h) for h in hands]
    if hands[0] > hands[1]:
        winning_hand = 0
    elif hands[0] < hands[1]:
        winning_hand = 1
    return jsonify({
        'winner': winning_hand,
        'hands': hand_text
    })
